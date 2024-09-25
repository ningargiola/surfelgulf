"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import Image from "next/image";


export default function Reports() {
  return (
    <section className="h-full">
      <div className="header sticky top-0 z-50">
        <Link href = "/"className="surf-el-gulf xl:text-center">Surf El Gulf <span className="beta">BETA</span></Link>
      </div>
      <h1 className="title pt-10">Thank you for contributing!</h1>
      <div className="form-box">
        <form className="form">
          <div className="form-left">
            <div className="form-row">
              <input type="text" className="input-box" placeholder="Start Time" />
              <input type="text" className="input-box" placeholder="End Time" />
            </div>
            <div className="form-row center-row">
              <input type="text" className="input-box center-input" placeholder="Experience Level" />
            </div>
            <div className="form-row">
              <input type="text" className="input-box" placeholder="Board Name" />
              <input type="text" className="input-box" placeholder="Board Type" />
            </div>
            <div className="form-row center-row">
              <input type="text" className="input-box center-input" placeholder="Board Liters" />
            </div>
            <div className="form-right">
              <textarea className="input-box textarea" placeholder="Description"></textarea>
            </div>
          </div>
          <div className="form-row slider-row">
            <label htmlFor="fun-rating" className="slider-label">Fun Rating</label>
            <input type="range" id="fun-rating" name="fun-rating" min="0" max="10" className="slider" />
          </div>
          <div className="form-row slider-row">
            <label htmlFor="quality-rating" className="slider-label">Quality Rating </label>
            <input type="range" id="quality-rating" name="quality-rating" min="0" max="10" className="slider" />
          </div>
          <button className="submit-button">
            Submit
          </button>
        </form>
      </div>
      <div className="pt-10">
        <footer className="footer">
          <div className="footer-content">
            <div className="text-content">
              <p>Created with stoke by <strong>Snell & Gargoyle</strong></p>
              <p>Riding the waves of innovation, one swell at a time.</p>
            </div>
              <Image
                className="footer-image"
                src="/assets/logoWhite.png" 
                alt="Dev tag" 
                width={50} 
                height={50} 
                priority={true}
              />
          </div>
        </footer>
      </div>
    </section>
  );
}

