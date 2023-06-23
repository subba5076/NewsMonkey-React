
import './App.css';
import Navbar from './components/Navbar';
//use rcc for class and rfc for function
//import Spinner from './components/Spinner';
import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter as Main,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  pagesize=6;
  render() {
    return (
      <div>
       
        
<Main>
      
        <Navbar/>
      <Routes>
        <Route exact path="/" element={<News pagesize={this.pagesize} country="in" key="general" category="general"/>} />
        <Route exact path="/business" element={<News pagesize={this.pagesize} country="in" key="business" category="business"/>}/>
        <Route exact path="/entertainment" element={<News pagesize={this.pagesize} country="in" key="entertainment" category="entertainment"/>}/>
        <Route exact path="/general" element={<News pagesize={this.pagesize} country="in" key="general"category="general"/>}/>
        <Route exact path="/health" element={<News pagesize={this.pagesize} country="in" key="health" category="health"/>}/>
        <Route exact path="/science" element={<News pagesize={this.pagesize} country="in" key="science" category="science"/>}/>
        <Route exact path="/sports" element={<News pagesize={this.pagesize} country="in" key="sports" category="sports"/>}/>
        <Route exact path="/technology" element={<News pagesize={this.pagesize} country="in" key="technology" category="technology"/>}/>
      </Routes>
   
      </Main>
      </div>
    )
  }
}


