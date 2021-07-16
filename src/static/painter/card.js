export default class LastMayday {
  palette(obj) {
    return ({
      "width": "1500px",
      "height": "2768px",
      "background": "#fff",
      views: [{
          "type": "image",
          "url": "https://wb.jaas.ac.cn/SmallExePic/TianAn.SE.210513/img/project/21-1.png",
          "css": {
            "width": "1500px",
            "height": "2768px",
            "top": "0px",
            "left": "0px",
            "rotate": "0",
            "borderRadius": "",
            "borderWidth": "",
            "borderColor": "#000",
            "shadow": "",
            "mode": "scaleToFill"
          }
        },
        {
          "type": "image",
          "url": `${obj.imgurl}`,
          "css": {
            "width": "260px",
            "height": "260px",
            "top": "620px",
            "left": "216px",
            "rotate": "0",
            "borderRadius": "200px",
            "borderWidth": "",
            "borderColor": "#000",
            "shadow": "",
            "mode": "scaleToFill"
          }
        },
        {
          "type": "text",
          "text": "姓名：" + decodeURIComponent(obj.name) + "",
          "css": {
            "color": "#546668",
            "background": "rgba(0,0,0,0)",
            "width": "480px",
            "height": "86px",
            "top": "720px",
            "left": "504px",
            "rotate": "0",
            "borderRadius": "",
            "borderWidth": "",
            "borderColor": "#000000",
            "shadow": "",
            "padding": "0px",
            "fontSize": "60px",
            "fontWeight": "normal",
            "maxLines": "4",
            "lineHeight": "86px",
            "textStyle": "fill",
            "textDecoration": "none",
            "fontFamily": "",
            "textAlign": "left"
          }
        },
        {
          "type": "text",
          "text": `${obj.tel}`,
          "css": {
            "color": "#546668",
            "background": "rgba(0,0,0,0)",
            "width": "400px",
            "height": "86px",
            "top": "1028px",
            "left": "300px",
            "rotate": "0",
            "borderRadius": "",
            "borderWidth": "",
            "borderColor": "#000000",
            "shadow": "",
            "padding": "0px",
            "fontSize": "60px",
            "fontWeight": "normal",
            "maxLines": "4",
            "lineHeight": "86px",
            "textStyle": "fill",
            "textDecoration": "none",
            "fontFamily": "",
            "textAlign": "left"
          }
        },
        {
          "type": "text",
          "text": `${obj.addr}`,
          "css": {
            "color": "#546668",
            "background": "rgba(0,0,0,0)",
            "width": "900px",
            "height": "80.08px",
            "top": "1188px",
            "left": "300px",
            "rotate": "0",
            "borderRadius": "",
            "borderWidth": "",
            "borderColor": "#000000",
            "shadow": "",
            "padding": "0px",
            "fontSize": "56px",
            "fontWeight": "normal",
            "maxLines": "4",
            "lineHeight": "80.8px",
            "textStyle": "fill",
            "textDecoration": "none",
            "fontFamily": "",
            "textAlign": "left"
          }
        },
        {
          "type": "image",
          "url": `${obj.qCode}`,
          "css": {
            "width": "536px",
            "height": "536px",
            "top": "1576px",
            "left": "474px",
            "rotate": "0",
            "borderRadius": "10px",
            "borderWidth": "",
            "borderColor": "#000",
            "shadow": "",
            "mode": "scaleToFill"
          }
        }
      ]
    });
  }
}