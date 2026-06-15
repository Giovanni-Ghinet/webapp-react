import { useState, useRef, useEffect } from 'react';
import { BsX, BsSend } from 'react-icons/bs';

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Ahoy marinaio! Hai bisogno di aiuto con il menù o vuoi conoscere i segreti della taverna?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  // Scroll automatico in fondo alla chat ogni volta che cambia il contenuto o si apre la finestra
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/anthropic/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }), // Verifica se il tuo backend aspetta 'message' o 'prompt'
      });

      if (!response.ok) throw new Error('Errore di connessione');

      const data = await response.json();
      // Adatta data.reply in base a cosa restituisce effettivamente il tuo backend
      const botContent = data.reply || data.content || data.message || "Non ho parole, marinaio...";
      
      setMessages(prev => [...prev, { role: 'assistant', content: botContent }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Maledizione! La bussola è rotta e non riesco a connettermi. Riprova più tardi." 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-widget-container">
      {/* Finestra di Chat */}
      {isOpen && (
        <div className="chat-window card shadow-lg border-secondary bg-dark text-white">
          <div className="card-header bg-secondary d-flex justify-content-between align-items-center py-2">
            <h5 className="mb-0 font-pirata text-accent">Assistente di Bordo</h5>
            <button className="btn btn-sm text-white p-0 border-0" onClick={() => setIsOpen(false)}>
              <BsX size={28} />
            </button>
          </div>
          <div className="card-body chat-messages p-3" ref={scrollRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`mb-3 d-flex ${msg.role === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                <div className={`p-2 px-3 rounded-4 small chat-msg-bubble ${msg.role === 'user' ? 'bg-primary text-white' : 'bg-secondary text-white'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && <div className="text-accent small italic">La ciurma sta riflettendo...</div>}
          </div>
          <form className="card-footer p-2 d-flex gap-2 bg-dark border-top border-secondary" onSubmit={handleSend}>
            <input
              type="text"
              className="form-control form-control-sm bg-dark text-white border-secondary shadow-none"
              placeholder="Chiedi al pirata..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="btn btn-sm chat-send-btn" disabled={loading}>
              <BsSend />
            </button>
          </form>
        </div>
      )}

      
      <button className="chat-button" onClick={() => setIsOpen(!isOpen)}>
        <img 
          src="/cozzi.png" 
          alt="Chat Assistente" 
          className="icon-ai"
        />
      </button>
    </div>
  );
}

export default ChatWidget;