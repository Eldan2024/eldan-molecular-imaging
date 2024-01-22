import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "../vendor/jarallax/dist/jarallax.min.js";
import "../styles/application.css";

Rails.start();
Turbolinks.start();
ActiveStorage.start();

// Import all images
const images = require.context("../images", true);
images.keys().forEach(images);

// Import all videos
const videos = require.context("../videos", true);
videos.keys().forEach(videos);
