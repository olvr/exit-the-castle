terser main.js -o main.min.js -c toplevel,drop_console,passes=3 -m toplevel --mangle-props reserved=['ArrowUp','ArrowRight','ArrowDown','ArrowLeft']

cp main.min.js ./package
zip -r ./exit-the-castle.zip ./package
ls -l ./exit-the-castle.zip
