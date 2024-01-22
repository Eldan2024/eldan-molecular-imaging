import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "../vendor/jarallax/dist/jarallax.min.js";
import "../vendor/@lottiefiles/lottie-player/dist/lottie-player.js";
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

// Import all favicon
const favicon = require.context("../favicon", true);
favicon.keys().forEach(favicon);

// Import all json
const json = require.context("../json", true);
json.keys().forEach(json);
