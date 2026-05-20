---
layout: halaman.liquid
title: Selamat datang di Kode Kruwet!
eleventyExcludeFromCollections: true
---
# Pilihan Hari Ini

<div class="pure-g">
    {%- for t in collections.all -%}
    <div class="pure-u-1 pure-u-md-1-2">
        <div class="rwt-gap">
            <div class="rwt-card">
                <h2><a href="{{ t.url }}">{{ t.data.title }}</a></h2>
                <p>📅 {{ t.date | date: "%d %B %Y" }}</p>
                <img src="/aset/{{ t.data.image }}"></img>
                <p>{{ t.data.description }}</p>
            </div>
        </div>
    </div>
    {%- endfor -%}
</div>