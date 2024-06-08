import { BsFillBagFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import "./card.css";

const Card = ({ img, title, company, category, prevPrice, newPrice, seller, number, id }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setShowChat(false); // Close chat if popup is closed
    setShowSharePopup(false); // Close share popup if main popup is closed
  };

  const chatWithSeller = (e) => {
    e.stopPropagation(); // Prevent triggering the card click event
    setShowChat(true);
  };

  const sendMessage = (message) => {
    setMessages([...messages, { from: 'user', text: message }]);
  };

  const handleSend = (e) => {
    e.preventDefault();
    const input = e.target.elements.messageInput;
    const message = input.value.trim();
    if (message) {
      sendMessage(message);
      input.value = '';
    }
  };

  const predefinedQuestions = [
    "Is the car still available?",
    "Can I schedule a test drive?",
    "Has the car had any previous accidents?"
  ];

  const openSharePopup = (e) => {
    e.stopPropagation(); // Prevent triggering the card click event
    setShowSharePopup(true);
  };

  const shareToPlatform = (platform) => {
    const shareData = {
      title: title,
      text: `Check out this ${title} from ${company} on our platform.`,
      url: window.location.href // Assuming the current page URL is the product page
    };

    let url = '';

    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`;
        break;
      case 'whatsapp':
        url = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareData.text} ${shareData.url}`)}`;
        break;
      case 'instagram':
        alert("Instagram sharing is not supported directly via web. Please share manually.");
        return;
      default:
        return;
    }

    window.open(url, '_blank');
  };

  return (
    <>
      <section className="card" onClick={openPopup}>
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
          </section>
          <button className="view-link">View More</button>
        </div>
      </section>

      {showPopup && (
        <div className="popup" style={{ backgroundColor: 'white', width: '80%', height: '80vh', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '9999', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="popup-content" style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', maxWidth: '800px', width: '100%', position: 'relative' }}>
            <span className="close-button" onClick={closePopup} style={{ position: 'absolute', top: '1rem', right: '1rem', cursor: 'pointer', fontSize: '2rem' }}>
              &times;
            </span>
            <div className="popup-details" style={{ display: 'flex', alignItems: 'center' }}>
              <div className="popup-img-container" style={{ marginRight: '2rem' }}>
                <img src={img} alt={title} className="popup-img" style={{ maxWidth: '300px', width: '100%' }} />
                <div className="popup-small-imgs" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                  <img src={img} alt={title} style={{ width: '60px', height: '60px', marginRight: '0.5rem', transform: 'rotate(90deg)' }} />
                  <img src={img} alt={title} style={{ width: '60px', height: '60px', marginRight: '0.5rem', transform: 'rotate(180deg)' }} />
                  <img src={img} alt={title} style={{ width: '60px', height: '60px', marginRight: '0.5rem', transform: 'rotate(270deg)' }} />
                  <img src={img} alt={title} style={{ width: '60px', height: '60px', transform: 'rotate(0deg)' }} />
                </div>
              </div>
              <div className="popup-info" style={{ fontSize: '1.2rem' }}>
                <h3 className="popup-title" style={{ fontSize: '1.8rem' }}>{title}</h3>
                <div className="popup-company">
                  <span>Company: {company}</span>
                </div>
                <div className="popup-category">
                  <span>Category: {category}</span>
                </div>
                <div className="popup-price">
                  <del>{prevPrice}</del> {newPrice}
                </div>
                <div className="popup-seller-info" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <span>Seller: {seller}</span>
                  <span>Contact: {number}</span>
                </div>
                
                <button className="chat-link view-link" onClick={chatWithSeller} style={{ marginTop: '1rem', marginRight: '0.5rem' }}>
                  Chat with Seller
                </button>
                <button className="view-link" onClick={openSharePopup} style={{ marginTop: '1rem' }}>
                  Share to Social Media
                </button>
              </div>
            </div>
            {showChat && (
              <div className="chat-popup" style={{ position: 'fixed', bottom: '10%', right: '5%', width: '300px', height: '400px', backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '8px', zIndex: '10000', display: 'flex', flexDirection: 'column' }}>
                <div className="chat-header" style={{ backgroundColor: '#f1f1f1', padding: '1rem', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 'bold' }}>Chat with {seller}</span>
                  <span onClick={() => setShowChat(false)} style={{ cursor: 'pointer' }}>&times;</span>
                </div>
                <div className="chat-body" style={{ padding: '1rem', overflowY: 'scroll', flexGrow: 1 }}>
                  {messages.map((msg, index) => (
                    <p key={index} style={{ alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start' }}>
                      {msg.text}
                    </p>
                  ))}
                </div>
                <div className="chat-footer" style={{ padding: '1rem', borderTop: '1px solid #ccc' }}>
                  <form onSubmit={handleSend} style={{ display: 'flex' }}>
                    <input name="messageInput" type="text" placeholder="Type a message" style={{ width: '70%', padding: '0.5rem' }} />
                    <button type="submit"className="view-link" style={{ padding: '0.5rem' }}>Send</button>
                  </form>
                  <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                    {predefinedQuestions.map((question, index) => (
                      <button key={index} onClick={() => sendMessage(question)} style={{ padding: '0.5rem', marginTop: '0.5rem' }}>
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {showSharePopup && (
              <div className="share-popup" style={{ backgroundColor: 'white', width: '300px', height: '200px', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '10000', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <button onClick={() => shareToPlatform('facebook')} style={{ margin: '10px', padding: '10px', backgroundColor: '#3b5998', color: 'white', borderRadius: '5px', border: 'none' }}>
                  Share on Facebook
                </button>
                <button onClick={() => shareToPlatform('whatsapp')} style={{ margin: '10px', padding: '10px', backgroundColor: '#25D366', color: 'white', borderRadius: '5px', border: 'none' }}>
                  Share on WhatsApp
                </button>
                <button onClick={() => shareToPlatform('instagram')} style={{ margin: '10px', padding: '10px', backgroundColor: '#C13584', color: 'white', borderRadius: '5px', border: 'none' }}>
                  Share on Instagram
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
