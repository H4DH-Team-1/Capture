import React from "react";
import Webcam from "react-webcam";

const h = {
  height: 100,
};
class WebCam extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: "" };
    this.takeScreenShot = this.takeScreenShot.bind(this);
  }

  takeScreenShot(e) {
    e.preventDefault();
  }
  /* capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  render() {
    return (
      <div>
        <Webcam value={this.state.snapShot} onChange={this.takeScreenShot} />
      </div>
    );
  } */
  setRef = (webcam) => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({ image: imageSrc });
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user",
    };

    return (
      <div className="row my-3 pt-3">
        <label className="col-3 my-3 pt-3">Picture: </label>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={550}
          videoConstraints={videoConstraints}
          className="col-5"
        />
        <button className="col-2 my-3" onClick={this.capture} style={h}>
          Capture photo
        </button>
        <img src={this.state.image} />
      </div>
    );
  }
}

export default WebCam;
