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
    <div className="Header">
      <h1 className="title">Technology Stack</h1>
      <p className="description">
        We provide development solutions to product companies, startups to maximize engineering and design values across full cycle and product development
      </p>
      <div className="technologies">
        <div className="web-technologies">
          <h2>Web Technologies</h2>
          <div className="web-categories">
            <div className="category1">Backend</div>
            <div className="category2">Frontend</div>
          </div>
          <div className="backend-technologies">
            <div className="backend-items">
              <img src={DjangoIcon} alt="Django"/>
              <span>Django</span>
            </div>
            <div className="backend-items">
              <img src={NodeJSIcon} alt="Node JS"/>
              <span>Node JS</span>
            </div>
            <div className="backend-items">
              <img src={PythonIcon} alt="Python"/>
              <span>Python</span>
            </div>
            <div className="backend-items">
              <img src={DotNetIcon} alt=".Net"/>
              <span>.Net</span>
            </div>
            <div className="backend-items">
              <img src={JavaIcon} alt="Java"/>
              <span>Java</span>
            </div>
            <div className="backend-items">
              <img src={RubyIcon} alt="Ruby"/>
              <span>Ruby</span>
            </div>
          </div>
          <div className="frontend-technologies">
            <div className="frontend-items">
              <img src={ReactIcon} alt="React"/>
              <span>React</span>
            </div>
            <div className="frontend-items">
              <img src={AngularIcon} alt="Angular"/>
              <span>Angular</span>
            </div>
            <div className="frontend-items">
              <img src={VueJSIcon} alt="Vue JS"/>
              <span>Vue JS</span>
            </div>
            <div className="frontend-items">
              <img src={TypeScriptIcon} alt="TypeScript"/>
              <span>TypeScript</span>
            </div>
          </div>
        </div>
        <div className="mobile-technologies">
          <h2>Mobile Technologies</h2>
          <div className="mobile-categories">
            <div className="category3">IOS</div>
            <div className="category4">Cross Platform</div>
          </div>
          <div className="ios-technologies">
            <div className="ios-items">
              <img src={SwiftIcon} alt="Swift"/>
              <span>Swift</span>
            </div>
          </div>
          <div className="cross-platform-technologies">
            <div className="cross-platform-items">
              <img src={FlutterIcon} alt="Flutter"/>
              <span>Flutter</span>
            </div>
            <div className="cross-platform-items">
              <img src={ReactNativeIcon} alt="React Native"/>
              <span>React Native</span>
            </div>
          </div>
          <div className="android-category">
            <div className="category5">Android</div>
          </div>
          <div className="android-technologies">
            <div className="android-items">
              <img src={KotlinIcon} alt="Kotlin"/>
              <span>Kotlin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
