import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Aayush",
    text: "Learning React is fun and I enjoy it a lot",
  },
  {
    id: "q2",
    author: "Hrithik",
    text: "Learning how the Web works is fun",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
