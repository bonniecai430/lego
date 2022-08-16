import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css'

export default function Footer() {

    const styles = {

        smallIcon: {
          width: 18,
          height: 18,
          marginRight: 10
        }       
      };

    let year = new Date();

    return (
        <footer>
            <div className="footer-links">
                <a href="/">Your Account</a>
                <a href="/">Your Orders</a>
                <a href="/">Wish List</a>
                <a href="/">Returns</a>
                <a href="/">Return Policy</a>
                <a href="/">Refund Policy</a>
                <a href="/">Cancellation Policy</a>
                <a href="/">Customer Service</a>
            </div>

        </footer>
    )
}