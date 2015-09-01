var {{ ellipse }} = L.ellipse([{{ lat }}, {{ lon }}], [{{ semi_major }}, {{ semi_minor }}], {{ tilt }}, {
                            color: '{{ line_color }}',
                            fillColor: '{{ fill_color }}',
                            fillOpacity: {{ fill_opacity }}
                            });
