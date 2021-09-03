const quotes = [
    {
        quote : "삶이 있는 한 희망은 있다" ,
        author : "-키케로-",
    },
    {
        quote : "진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 해" ,
        author : "-찰리 채플린-",
    },
    {
        quote : "신은 용기있는 자를 결코 버리지 않는다" ,
        author : "-켄러-",
    },
    {
        quote : "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라. 모든 인생은 실험이다 . 더 많이 실험할수록 더 나아진다" ,
        author : "-랄프 왈도 에머슨-",
    },
    {
        quote : "한 번의 실패와 영원한 실패를 혼동하지 마라" ,
        author : "-F.스콧 핏제랄드-",
    },
    {
        quote : "절대 어제를 후회하지 마라. 인생은 오늘의 내 안에 있고 내일은 스스로 만드는 것이다" ,
        author : "-L론허바드-",
    },
    {
        quote : "해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다" ,
        author : "-톨스토이-",
    },
    {
        quote : "고난의 시기에 동요하지 않는 것, 이것은 진정 칭찬받을 만한 뛰어난 인물의 증거다" ,
        author : "-베토벤-",
    },
    {
        quote : "단순하게 살라. 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?" ,
        author : "-이드리스 샤흐-",
    },
    {
        quote : "겨울이 오면 봄이 멀지 않으리" ,
        author : "-셸리-",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author; 
