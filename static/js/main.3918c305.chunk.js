(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(52)},33:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(12),o=n.n(r),i=(n(33),n(3)),c=n(1),l=function(){return s.a.createElement("div",{className:"login-form"},s.a.createElement("form",null,s.a.createElement("h1",null,"Login"),s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"input-field"},s.a.createElement("input",{type:"email",placeholder:"Email",value:"user"})),s.a.createElement("div",{className:"input-field"},s.a.createElement("input",{type:"password",placeholder:"Password",value:"user2345"}))),s.a.createElement("div",{className:"action"},s.a.createElement(i.b,{to:"/StartQuiz",className:"link button"},"Login"))))},u=function(){return s.a.createElement("div",{className:"login-form start-form"},s.a.createElement("div",{className:"action"},s.a.createElement(i.b,{to:"/QuestionTest",className:"link button"},"Start Test")))},m=n(7),d=n(22),p=n(23),h=n(24),w=n(26),f=n(25),y=n(27),v=n(6),E=[{question:" As soon as the state of the React component is modified, the component _______",answers:[{type:"Microsoft",content:"recreated from scratch"},{type:"Nintendo",content:"restore the component"},{type:"Sony",content:"Does nothing, you have to call the render method to make the component"}]},{question:"What is ReactJS?",answers:[{type:"Microsoft",content:"Server-side Framework"},{type:"Nintendo",content:"User-interface framework"},{type:"Sony",content:"Both"}]},{question:"Which of these racing franchises would you prefer to play a game from?",answers:[{type:"Microsoft",content:"Forza"},{type:"Nintendo",content:"Mario Kart"},{type:"Sony",content:"Gran Turismo"}]},{question:"Which of these games do you think is best?",answers:[{type:"Microsoft",content:"BioShock"},{type:"Nintendo",content:"The Legend of Zelda: Ocarina of Time"},{type:"Sony",content:"Final Fantasy VII"}]},{question:"What console would you prefer to own?",answers:[{type:"Microsoft",content:"X-Box One"},{type:"Nintendo",content:"Wii U"},{type:"Sony",content:"Playstation 4"}]}],k=n(8);var N=function(e){return s.a.createElement("h2",{className:"question"},e.content)};var S=function(e){return s.a.createElement("div",{className:"questionCount"},"Question ",s.a.createElement("span",null,e.counter)," of ",s.a.createElement("span",null,e.total))};var q=function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("li",{className:"answerOption"},s.a.createElement("input",{type:"radio",className:"radioCustomButton",name:"radioGroup",checked:e.answerType===e.answer,id:e.answerType,value:e.answerType,disabled:e.answer,onChange:e.onAnswerSelected}),s.a.createElement("label",{className:"radioCustomLabel",htmlFor:e.answerType},e.answerContent)))},b=n(9),T=n.n(b);T()(document).ready(function(){T()(".view-summary").click(function(){T()(".summarrysection").slideToggle()})});var g=function(e){return s.a.createElement(k.CSSTransitionGroup,{className:"container",component:"div",transitionName:"fade",transitionEnterTimeout:800,transitionLeaveTimeout:500,transitionAppear:!0,transitionAppearTimeout:500},s.a.createElement("div",{key:e.questionId},s.a.createElement(S,{counter:e.questionId,total:e.questionTotal}),s.a.createElement(N,{content:e.question}),s.a.createElement("ul",{className:"answerOptions"},e.answerOptions.map(function(t){return s.a.createElement(q,{key:t.content,answerContent:t.content,answerType:t.type,answer:e.answer,questionId:e.questionId,onAnswerSelected:e.onAnswerSelected})})),s.a.createElement(i.b,{to:"/StartQuiz",className:"link-skip"},"Skip"),s.a.createElement(i.b,{to:"StartQuiz",className:"link-skip link-return"},"Return"),s.a.createElement(i.b,{to:"#",className:"view-summary"},"View Summary"),s.a.createElement("div",{className:"summarrysection"},"restore the component")))};var A=function(e){return s.a.createElement(k.CSSTransitionGroup,{className:"container result",component:"div",transitionName:"fade",transitionEnterTimeout:800,transitionLeaveTimeout:500,transitionAppear:!0,transitionAppearTimeout:500},s.a.createElement("div",null,s.a.createElement("div",null,"Thank You For Completion Assesement. ",s.a.createElement(i.b,{to:"/",className:"submit"},"Finished Assesement"))))},O=(n(50),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(w.a)(this,Object(f.a)(t).call(this,e))).state={counter:0,questionId:1,question:"",answerOptions:[],answer:"",answersCount:{},result:""},n.handleAnswerSelected=n.handleAnswerSelected.bind(Object(v.a)(Object(v.a)(n))),n}return Object(y.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=E.map(function(t){return e.shuffleArray(t.answers)});this.setState({question:E[0].question,answerOptions:t[0]})}},{key:"shuffleArray",value:function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e}},{key:"handleAnswerSelected",value:function(e){var t=this;this.setUserAnswer(e.currentTarget.value),this.state.questionId<E.length?setTimeout(function(){return t.setNextQuestion()},300):setTimeout(function(){return t.setResults(t.getResults())},300)}},{key:"setUserAnswer",value:function(e){this.setState(function(t,n){return{answersCount:Object(d.a)({},t.answersCount,Object(m.a)({},e,(t.answersCount[e]||0)+1)),answer:e}})}},{key:"setNextQuestion",value:function(){var e=this.state.counter+1,t=this.state.questionId+1;this.setState({counter:e,questionId:t,question:E[e].question,answerOptions:E[e].answers,answer:""})}},{key:"getResults",value:function(){var e=this.state.answersCount,t=Object.keys(e),n=t.map(function(t){return e[t]}),a=Math.max.apply(null,n);return t.filter(function(t){return e[t]===a})}},{key:"setResults",value:function(e){1===e.length?this.setState({result:e[0]}):this.setState({result:"Undetermined"})}},{key:"renderQuiz",value:function(){return s.a.createElement(g,{answer:this.state.answer,answerOptions:this.state.answerOptions,questionId:this.state.questionId,question:this.state.question,questionTotal:E.length,onAnswerSelected:this.handleAnswerSelected})}},{key:"renderResult",value:function(){return s.a.createElement(A,{quizResult:this.state.result})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"App-header"},s.a.createElement("h2",null,"Multiple Choice Quistion & Answer")),this.state.result?this.renderResult():this.renderQuiz()))}}]),t}(a.Component)),C=function(){return s.a.createElement("div",null,s.a.createElement(i.a,null,s.a.createElement(c.c,null,s.a.createElement(c.a,{path:"/",exact:!0,component:l}),s.a.createElement(c.a,{path:"/StartQuiz",exact:!0,component:u}),s.a.createElement(c.a,{path:"/QuestionTest",exact:!0,component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);
//# sourceMappingURL=main.3918c305.chunk.js.map