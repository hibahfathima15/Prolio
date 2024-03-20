import React, { useState } from 'react';
import './Faqs.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const FaqItem = ({ question, answer, expanded, onClick }) => {
  return (
    <div className="faq-item" onClick={onClick}>
      <div className="question">{question} {expanded ? <KeyboardArrowUpIcon className='arrow'/> : <KeyboardArrowDownIcon className='arrow' />}</div>
      
      {expanded && <div className="answer">{answer}</div>}
    </div>
  );
};

const Faqs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const faqData = [
    {
      question: 'Click here to expand the collapsed text',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate aut corporis eligendi quis repellendus facere veniam minus molestias minima accusantium neque quaerat iusto dolor voluptas, dignissimos aspernatur sed. Neque.',
    },
    {
        question: 'Click here to expand the collapsed text',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate aut corporis eligendi quis repellendus facere veniam minus molestias minima accusantium neque quaerat iusto dolor voluptas, dignissimos aspernatur sed. Neque.',
      },
    {
        question: 'Click here to expand the collapsed text',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate aut corporis eligendi quis repellendus facere veniam minus molestias minima accusantium neque quaerat iusto dolor voluptas, dignissimos aspernatur sed. Neque.',
    },
    {
        question: 'Click here to expand the collapsed text',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate aut corporis eligendi quis repellendus facere veniam minus molestias minima accusantium neque quaerat iusto dolor voluptas, dignissimos aspernatur sed. Neque.',
    },
    {
        question: 'Click here to expand the collapsed text',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate aut corporis eligendi quis repellendus facere veniam minus molestias minima accusantium neque quaerat iusto dolor voluptas, dignissimos aspernatur sed. Neque.',
    },
  ];

const handleItemClick = (index) => {
setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
};

return (
    <div>
      <h1 className="faq">FAQs</h1>
      <div className='faq-line'></div>
        <div className="faq-container">
            <div className="faq-list">
                {faqData.map((item, index) => (
                <FaqItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    expanded={expandedIndex === index}
                    onClick={() => handleItemClick(index)}
                />
                ))}
            </div>
        </div>
    </div>
  );
};

export default Faqs;
