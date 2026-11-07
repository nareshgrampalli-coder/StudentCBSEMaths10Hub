---
layout: book
title: Contents
permalink: /
---

<p class="eyebrow">2026–27 edition · Board examination 2027</p>

<p class="home-intro">A clear, chapter-by-chapter study book for CBSE Class 10 Mathematics Standard (041). Choose a section below, then use the Previous and Next controls at the end of each page to read it like a book.</p>

<p><a class="start-reading" href="{{ '/handbook/sections/examination-blueprint/' | relative_url }}">Start reading: Examination blueprint →</a></p>

<ul class="contents-list">
  {% assign previous_group = '' %}
  {% for item in site.data.book %}
    {% if item.group != previous_group %}
      <li class="contents-group">{{ item.group }}</li>
      {% assign previous_group = item.group %}
    {% endif %}
    <li><a href="{{ item.url | relative_url }}">{{ item.title | escape }} →</a></li>
  {% endfor %}
</ul>

<p><a href="{{ '/complete-handbook/' | relative_url }}">Open the complete consolidated handbook</a></p>
