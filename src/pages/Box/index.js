import React, { Component } from 'react';

import { MdInsertDriveFile } from 'react-icons/md'

import logo from "../../assets/logo.svg"
import './styles.css';

export default class Box extends Component {
  render() {
    return (
      <div id="box-container">
      <header>
        <img src={logo} alt="RocketBox"/>
        <h1>Rocketseat</h1>
      </header>

      <ul>
        <li>
          <a className="fileInfo" href="">
            <MdInsertDriveFile size={24} color="#a5cfff" />
            <strong>Desafio.pdf</strong>
          </a>

          <span>há 3 minutos atrás</span>
        </li>
        <li>
          <a className="fileInfo" href="">
            <MdInsertDriveFile size={24} color="#a5cfff" />
            <strong>Desafio.pdf</strong>
          </a>

          <span>há 3 minutos atrás</span>
        </li>
      </ul>
    </div>
    );
  }
}
