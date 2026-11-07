import React from "react";
import "../styles/macbook.css";

/**
 * LoadingComponent
 *
 * 3D Animated CSS MacBook component positioned at the bottom of the About page
 * (directly above the footer).
 */
export const LoadingComponent: React.FC = () => {
  return (
    <section
      className="w-full pt-8 pb-4 flex flex-col items-center justify-center border-t border-white/[0.08]"
      aria-label="Interactive 3D MacBook"
    >
      <div className="macbook-wrapper">
        <div className="macbook">
          <div className="inner">
            <div className="screen">
              <div className="face-one">
                <div className="camera"></div>
                <div className="display">
                  <div className="shade"></div>
                </div>
                <span>MacBook Air</span>
              </div>
            </div>
            <div className="macbody">
              <div className="face-one">
                <div className="touchpad"></div>
                <div className="keyboard">
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key space"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key"></div>
                  <div className="key f"></div>
                  <div className="key f"></div>
                  <div className="key f"></div>
                  <div className="key f"></div>
                  <div className="key f"></div>
                  <div className="key f"></div>
                  <div className="key f"></div>
                  <div className="key f"></div>
                  <div className="key f"></div>
                  <div className="key f"></div>
                  <div className="key f"></div>
                  <div className="key f"></div>
                  <div className="key f"></div>
                  <div className="key f"></div>
                  <div className="key f"></div>
                  <div className="key f"></div>
                  <div className="key f"></div>
                  <div className="key f"></div>
                </div>
              </div>
              <div className="pad one"></div>
              <div className="pad two"></div>
              <div className="pad three"></div>
              <div className="pad four"></div>
            </div>
          </div>
          <div className="shadow"></div>
        </div>
      </div>
    </section>
  );
};
