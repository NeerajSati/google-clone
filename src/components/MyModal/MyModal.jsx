import React, { useState, useEffect } from "react";
import "./myModal.css";
import { Modal, Button } from "react-bootstrap";
import GoogleDot from "../../img/googledots.gif";
import GoogleDotStop from "../../img/googledotstop.png";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useNavigate } from "react-router-dom";

function MyModal(props) {
  const [search, setSearch] = useState("");
  const [stop, setStop] = useState(true);
  const { transcript, resetTranscript } = useSpeechRecognition();
  let navigate = useNavigate();

  useEffect(() => {
    if (!stop) {
      SpeechRecognition.startListening();
      setSearch(transcript);
      setTimeout(() => {
        setStop(true);
      }, 4000);
    } else {
      SpeechRecognition.abortListening();
      setSearch("");
      resetTranscript();
    }
  }, [stop, transcript]);

  useEffect(() => {
    if (transcript) {
      navigate(`/${transcript}/all`);
    }
  }, [stop]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Voice Search...
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="justifyCenter">
          Your Browser does not Support Speech Recognition.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Voice Search...
          <p className="modalPara">
            {"("}Your Browser may not support Speech Recognition..{")"}
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="justifyCenter">
        {!stop && <h4>Listening...</h4>}
        {stop && <h4>Click to Speak!</h4>}
        {!stop && <h4>{search}</h4>}
        {stop && (
          <img
            src={GoogleDotStop}
            onClick={() => setStop(false)}
            className="googleDots"
            alt="listening"
          />
        )}
        {!stop && (
          <img
            src={GoogleDot}
            onClick={() => setStop(true)}
            className="googleDots"
            alt="listening"
          />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;
