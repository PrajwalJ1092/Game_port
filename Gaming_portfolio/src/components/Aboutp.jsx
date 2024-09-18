import React from "react";
import "./Aboutp.css";
import pajju from "./prajwal.jpg";

function Aboutp() {
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };

  return (
    <div className="main_ct dflex">
      <div className="text-animation">
        <h1>I'm Prajwal Jainkeri</h1>
        <p className="text-effect">
          <a
            href=""
            class="typewrite"
            data-period="2000"
            data-type='[ "Full Stack Developer", "Gamer", "Photographer", "Traveller." ]'
          >
            <span class="wrap"></span>
          </a>
        </p>
        <p>
          "Full Stack Developer with a passion for creating scalable solutions,
          enhancing user experiences,
          <br /> and driving innovation through clean, efficient code."
        </p>
        <div>
          <button>Linkedin</button>
          <button>Email</button>
          <button>Github</button>
        </div>
      </div>
      <div className="my-image">
        <img src={pajju} height={400} alt="" srcset="" />
      </div>
    </div>
  );
}

export default Aboutp;
