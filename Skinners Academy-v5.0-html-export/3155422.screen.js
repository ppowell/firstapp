appbuilder.app.FileLoader.fetched({"settings":{"currentscreen":null,"main":"3155422","maintype":"screen"},"screen":{"3155422":{"html":"<style scoped>#item4392734.item {\n\tborder-bottom-width: 0;\n}\n#item4392735 {\n\ttext-align: center;\n\tfont-size: 20px;\n\tfont-weight: bold;\n\tpadding-top: 30px;\n}\n#item4392735.item {\n\tborder-bottom-width: 0;\n}\n#item4392736.item {\n\tborder-bottom-width: 0;\n}\n#item4392737.item {\n\tborder-bottom-width: 0;\n}\n#item4392738 {\n\tcolor: rgb(140,140,140);\n\tfont-size: 12px;\n\tfont-style: italic;\n}\n#item4392738 button {\n\tcolor: rgb(140,140,140);\n}\n#item4392738 .item-icon-inner .title {\n\tcolor: rgb(140,140,140);\n}\n<\/style><div class=\" screen list\" id=\"screen3155422\" data-screentype=\"list\" data-tab=\"1176085\"><div class=\"header\" x-blackberry-focusable=\"true\"><div class=\"background\"><\/div><div class=\"back\" data-linktype=\"back\" data-href=\"3155416\" x-blackberry-focusable=\"true\">Back<\/div><div class=\"title\"><span>Update the score<\/span><\/div><\/div><div class=\"items scrolling\"><div class=\"items-inner\"><div class=\" item html text\" id=\"item4392734\"><div class=\"html\">If the user got the right answer, add 1 to their score. Otherwise just leave it unchanged.<\/div><\/div><div class=\" item html text\" id=\"item4392735\"><div class=\"html\">SCORE<\/div><\/div><div class=\" item textbox\" id=\"item4392736\"><div class=\"textbox-container no-title\"><input class=\"textbox\" type=\"text\" name=\"score\" value=\"\" placeholder=\"\" data-variable=\"score\" data-save-value=\"yes\" data-autocomplete-url=\"\" data-autocomplete-variable=\"score\"\/><\/div><\/div><div class=\" item button link link-no-arrow\" id=\"item4392737\" data-linktype=\"jscode\" data-href=\"item4392737\" x-blackberry-focusable=\"true\"><button class=\"button\">Update your score<\/button><\/div><div class=\" item html text link\" id=\"item4392738\" data-linktype=\"screen\" data-href=\"3155433\" x-blackberry-focusable=\"true\"><div class=\"link-arrow\"><\/div><div class=\"html\">(View code)<\/div><\/div><div class=\" item plain link\" id=\"item4392739\" data-linktype=\"screen\" data-href=\"3155423\" x-blackberry-focusable=\"true\"><div class=\"link-arrow\"><\/div><img class=\"icon\" src=\"94156plain_x2\" width=\"40\" height=\"40\"\/><div class=\"text\">Go to Total Number of Questions<\/div><\/div><\/div><\/div><\/div>","updated":1418758947,"css":"","secured":false,"javascripts":{"item4392737":"if(app.getVariable(\"guess\") == app.getVariable(\"answer\"))\n  app.setVariable(\"score\", Number(app.getVariable(\"score\")) + 1)"}}}});