import _ from "lodash";
import "./style.css";
import { home } from './functions/home.js';
import { contact } from "./functions/contact.js";
import { targetPageLocation } from "./functions/movePage.js";
home();
contact();
targetPageLocation();
