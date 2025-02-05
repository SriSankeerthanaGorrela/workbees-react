import React from 'react';
import './Technology.css'; 

import DjangoIcon from './Assets/Django.svg';
import NodeJSIcon from './Assets/NodeJS.svg';
import PythonIcon from './Assets/Python.svg';
import DotNetIcon from './Assets/.Net.svg';
import JavaIcon from './Assets/Java.svg';
import RubyIcon from './Assets/Ruby.svg';

import ReactIcon from './Assets/React.svg';
import AngularIcon from './Assets/Angular.svg';
import VueJSIcon from './Assets/VueJS.svg';
import TypeScriptIcon from './Assets/TypeScript.svg';

import SwiftIcon from './Assets/Swift.svg';
import FlutterIcon from './Assets/Flutter.svg';
import ReactNativeIcon from './Assets/ReactNative.svg';
import KotlinIcon from './Assets/Kotlin.svg';


const Technology = () => {
  return (
    <div className="technology-container">
      <h1 className="title">Technology Stack</h1>
      <p className="description">
        We provide development solutions to product companies, startups to maximize engineering and design values across full cycle and product development
      </p>
      <div className="technology-sections">
        <div className="web-technologies">
          <h2>Web Technologies</h2>
          <div className="tech-categories">
            <div className="category-item">Backend</div>
            <div className="category-item">Frontend</div>
          </div>
          <div className="backend-technologies">
            <div className="technology-item">
              <img src={DjangoIcon} alt="Django" />
              <span>Django</span>
            </div>
            <div className="technology-item">
              <img src={NodeJSIcon} alt="Node JS" />
              <span>Node JS</span>
            </div>
            <div className="technology-item">
              <img src={PythonIcon} alt="Python" />
              <span>Python</span>
            </div>
            <div className="technology-item">
              <img src={DotNetIcon} alt=".Net" />
              <span>.Net</span>
            </div>
            <div className="technology-item">
              <img src={JavaIcon} alt="Java" />
              <span>Java</span>
            </div>
            <div className="technology-item">
              <img src={RubyIcon} alt="Ruby" />
              <span>Ruby</span>
            </div>
          </div>
          <div className="frontend-technologies">
            <div className="technology-item">
              <img src={ReactIcon} alt="React" />
              <span>React</span>
            </div>
            <div className="technology-item">
              <img src={AngularIcon} alt="Angular" />
              <span>Angular</span>
            </div>
            <div className="technology-item">
              <img src={VueJSIcon} alt="Vue JS" />
              <span>Vue JS</span>
            </div>
            <div className="technology-item">
              <img src={TypeScriptIcon} alt="TypeScript" />
              <span>TypeScript</span>
            </div>
          </div>
        </div>
        <div className="mobile-technologies">
          <h2>Mobile Technologies</h2>
          <div className="tech1-categories">
            <div className="category-item">IOS</div>
            <div className="category-item">Cross Platform</div>
          </div>
          <div className="ios-technologies">
            <div className="technology1-item">
              <img src={SwiftIcon} alt="Swift" />
              <span>Swift</span>
            </div>
          </div>
          <div className="cross-platform-technologies">
            <div className="technology1-item">
              <img src={FlutterIcon} alt="Flutter" />
              <span>Flutter</span>
            </div>
            <div className="technology1-item">
              <img src={ReactNativeIcon} alt="React Native" />
              <span>React Native</span>
            </div>
          </div>
          <div className="tech2-categories">
            <div className="category-item">Android</div>
          </div>
          <div className="android-technologies">
            <div className="technology2-item">
              <img src={KotlinIcon} alt="Kotlin" />
              <span>Kotlin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
