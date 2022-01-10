import React, { useState } from 'react';
// import { init, send } from 'emailjs-com';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';
import { init, send } from 'emailjs-com';
import Header from './Header';
import Footer from './Footer';

const Inquiry = function () {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const templateParam = {
    from_name: name,
    from_email: mail,
    title,
    message,
  };

  const sendMail = () => {
    const userID = process.env.REACT_APP_USER_ID;
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;

    if (
      userID !== undefined
      && serviceID !== undefined
      && templateID !== undefined
    ) {
      init(userID);

      send(serviceID, templateID, templateParam).then(() => {
        window.alert('お問い合わせを送信致しました。');

        setName('');
        setMail('');
        setMessage('');
        setTitle('');
      });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    sendMail();
  };

  const handleCanceled = () => {
    setName('');
    setMail('');
    setMessage('');
    setTitle('');
  };

  const disableSend = name === '' || mail === '' || title === '' || message === '';

  return (
    <div className="container">
      <Header />
      <div className="inquiry_container">
        <h2>お問い合わせ</h2>
        <div>
          <p>
            こちらはお問い合わせページです。
            <br />
            質問等ございましたら、こちらからご連絡お願い致します。
          </p>
          <form>
            <div>
              <label htmlFor="nameForm">
                ご氏名
                <br />
                <input
                  type="text"
                  id="nameForm"
                  className="inquiry_input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="mailForm">
                メールアドレス
                <br />
                <input
                  type="email"
                  id="mailForm"
                  className="inquiry_input"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="mailTitleForm">
                件名
                <br />
                <input
                  type="text"
                  id="mailTitleForm"
                  className="inquiry_input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="mailContentForm">
                お問い合わせ内容
                <br />
                <textarea
                  type="text"
                  id="mailContentForm"
                  className="inquiry_input"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>
            </div>

            <div className="btns">
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<SendIcon />}
                  onClick={handleClick}
                  disabled={disableSend}
                >
                  <strong>お問い合わせを送信する</strong>
                </Button>
              </div>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<ClearIcon />}
                  onClick={handleCanceled}
                >
                  <strong>キャンセル</strong>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Inquiry;
