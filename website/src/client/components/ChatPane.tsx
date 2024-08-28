import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { c } from './ThemeProvider';

const ChatPane: React.FC = () => {
  const [messages, setMessages] = React.useState<string[]>([]);
  const [inputValue, setInputValue] = React.useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className={css(styles.container)}>
      <h2 className={css(styles.heading)}>Artificial Snack Intelligence (ASI)</h2>
      <div className={css(styles.messageList)}>
        {messages.map((message, index) => (
          <div key={index} className={css(styles.message)}>
            {message}
          </div>
        ))}
      </div>
      <div className={css(styles.inputContainer)}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          className={css(styles.input)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage} className={css(styles.sendButton)}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPane;

const styles = StyleSheet.create({
  container: {
    backgroundColor: c('content'),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRight: `1px solid ${c('border')}`,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 16,
    borderBottom: `1px solid ${c('border')}`,
    margin: 0,
  },
  messageList: {
    flex: 1,
    overflowY: 'auto',
    padding: 16,
  },
  message: {
    marginBottom: 8,
    padding: 8,
    backgroundColor: c('hover'),
    borderRadius: 4,
  },
  inputContainer: {
    display: 'flex',
    padding: 16,
    borderTop: `1px solid ${c('border')}`,
  },
  input: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    borderRadius: 4,
    border: `1px solid ${c('border')}`,
  },
  sendButton: {
    padding: '8px 16px',
    backgroundColor: c('primary'),
    color: c('primary-text'),
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
  },
});