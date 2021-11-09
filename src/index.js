import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Entry } from './entry.js';

$(document).ready(function() {
  $("form#journal-entry").submit(function(event) {
    event.preventDefault();
    const title = $("#title").val();
    const entry = $("#entry").val();
    let newEntry = new Entry(title, entry);
    console.log(newEntry);
    $("#new-journal-entry").text(newEntry.getWordCount());
    $("#new-vowel-count").text(newEntry.getVowelCount());
  });
});