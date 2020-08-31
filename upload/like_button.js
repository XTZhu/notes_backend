"use strict";

const e = React.createElement;
const { Button, Upload, message } = antd;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      // 初始化的文件列表
      fileList: [],
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(info) {
    let fileList = [...info.fileList];

    // 2. Read from response and show file link
    fileList = fileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
        //TODO: 这里根据file.response.status修改file.status
      }
      return file;
    });

    this.setState({ fileList });
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      // console.log(uploadInput);
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }

  render() {
    const props = {
      name: "file",
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      headers: {
        authorization: "authorization-text",
      },
      // 回调方法
      onChange: this.handleOnChange,
    };

    // babel转义 不用管
    function _extends() {
      _extends =
        Object.assign ||
        function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
      return _extends.apply(this, arguments);
    }

    return e(
      "div",
      null,
      e(
        "button",
        {
          onClick: () =>
            this.setState({
              liked: true,
            }),
        },
        "Like"
      ),
      e(
        Upload,
        _extends({}, props, {
          fileList: this.state.fileList,
        }),
        e(Button, null, " Upload")
      )
    );
  }
}

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(LikeButton), domContainer);
