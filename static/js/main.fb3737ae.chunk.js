(this["webpackJsonpreact-checklist"]=this["webpackJsonpreact-checklist"]||[]).push([[0],{25:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a,i,r,s,c,d,o,u,l,h,b=n(1),j=n.n(b),k=n(16),p=n.n(k),f=(n(25),n(9)),m=n(4),O=n(5),v=n(8),g=n(7),x=n(6),L=n(2),T=n(3),y=n(0),w=T.a.div(a||(a=Object(L.a)(["\n    text-align: center;\n    letter-spacing: 0.1rem;\n    margin: 10%;\n    div {\n        font-family: var(--header-font);\n        padding: 0.5rem;\n        font-size: 1.5rem;\n    }\n    div:hover {\n        color: var(--secorndory-background);\n    }\n    button {\n        background-color: transparent;\n        border: none;\n        display: block\n    }\n"]))),C=function(t){function e(e){e.preventDefault(),t.editCurrentList(e.target.id)}return Object(y.jsx)(w,{children:t.lists.map((function(t){return Object(y.jsx)("button",{onClick:e,children:Object(y.jsx)("div",{id:t.id,children:t.name})},t.id)}))})},S=T.a.div(i||(i=Object(L.a)(["\n    padding: 2rem;\n"]))),N=T.a.div(r||(r=Object(L.a)(["\n        margin-left: auto;\n        margin-right: auto;\n        cursor: pointer;\n        border: 1px solid var(--tertiary-background);\n        border-radius: 5px;\n        color: var(--text);\n        font-size: 1.2rem;\n        height: 40px;\n        width: 150px;\n        font-family: var(--content-font);\n        padding: 10px;\n        transition: all .2s ease-in-out;\n        text-align: center;\n        &:hover{\n            transform: scale(1.2);\n            background-color: var(--tertiary-background);\n        }\n    "]))),A=function(t){return Object(y.jsx)(S,{children:Object(y.jsx)(N,{onClick:function(){return t.startAddingTask()},children:t.children})})},I=n(12),z=n(20),B=n.n(z),F=T.a.button(s||(s=Object(L.a)(["\n    width: 100%;\n    background: var(--tertiary-background);\n    border: 1px solid transparent;\n    border-radius: 5px;\n    cursor: pointer;\n    outline: none; \n    text-align: center;\n    min-height: 2.5rem;\n    font-family: var(--header-font);\n    font-size: 15px;\n    padding: 0 1rem 0 1rem\n"]))),D=function(t){var e=t.type,n=t.children;return Object(y.jsx)(F,{type:e,children:n})},E=T.a.input(c||(c=Object(L.a)(["\n        width: 99%;\n        border: 1px solid var(--primary-background);\n        border-radius: 5px;\n        background-color: var(--secondory-background);\n        cursor: pointer;\n        outline: none; \n        text-align: center;\n        min-height: 2.5rem;\n        font-family: var(--header-font);\n        font-size: 1rem\n    "]))),J=function(t){Object(g.a)(n,t);var e=Object(x.a)(n);function n(){return Object(m.a)(this,n),e.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){var t=this.props,e=t.name,n=t.placeholder,a=t.value,i=t.handleChange;return Object(y.jsx)(E,{name:e,placeholder:n,value:a,onChange:i})}}]),n}(b.Component),R=T.a.form(d||(d=Object(L.a)(["\n    padding: 2rem;\n"]))),M=function(t){Object(g.a)(n,t);var e=Object(x.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={name:""},t.handleChange=function(e){t.setState(Object(I.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.state.name.length>0&&t.state.name.length<20?"rename"===t.props.status?t.props.onSubmit(t.props.id,t.state.name):t.props.onSubmit({id:B()(),name:t.state.name,checked:!1}):alert("Input length should more than 1 and no longer than 20!")},t}return Object(O.a)(n,[{key:"render",value:function(){return Object(y.jsxs)(R,{onSubmit:this.handleSubmit,children:[Object(y.jsx)(J,{name:"name",placeholder:this.props.placeholder,value:this.state.name,handleChange:this.handleChange}),Object(y.jsx)(D,{children:"Save!"})]})}}]),n}(b.Component),X=T.a.div(o||(o=Object(L.a)(["\n        background-color: var(--primary-background);\n        width: 25%;\n        float: left;\n        min-height: 100vh;\n        color:var(--text);\n    "]))),_=function(t){Object(g.a)(n,t);var e=Object(x.a)(n);function n(){return Object(m.a)(this,n),e.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){var t=this.props,e=t.newList,n=t.startAddingList,a=t.lists,i=t.addNewList,r=t.editCurrentList;return Object(y.jsxs)(X,{children:[Object(y.jsx)("div",{className:"header",children:"Lists"}),Object(y.jsx)(C,{lists:a,editCurrentList:r}),!e&&Object(y.jsx)(A,{startAddingTask:n,children:"Add new list"}),e&&Object(y.jsx)(M,{status:"new list",placeholder:"Enter new list",onSubmit:i})]})}}]),n}(b.Component),q=n(10),G=T.a.button(u||(u=Object(L.a)(["\n        display: block;\n        color: red;\n        cursor: pointer;\n        transition: all .2s ease-in-out;\n        background: transparent;\n        border: none;\n        outline: none;\n        font-size: 15px;\n        &:hover{\n            color: red;\n            transform: scale(1.4)\n        }\n    "]))),H=function(t){return Object(y.jsx)(G,{type:"button",onClick:function(){return t.deleteTask(t.taskId)},children:"X"})};n(29);function K(t){var e=t.taskId,n=t.checked,a=t.editTaskCheck;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("input",{type:"checkbox",id:e,checked:n,onChange:function(){return a(e,!n)}}),Object(y.jsx)("label",{htmlFor:e,children:Object(y.jsx)("div",{id:"tick_mark"})})]})}var P,Q,U=T.a.div(l||(l=Object(L.a)(["    \n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n    border-bottom: 1px solid var(--tertiary-background);\n"]))),V=T.a.div(h||(h=Object(L.a)(["\n    color: var(--text);\n    font-size: var(--secondory-font-size);\n    font-family: var(--content-font);\n    letter-spacing: 0.1rem;\n    div {\n        cursor: pointer;\n    }\n"]))),W=function(t){Object(g.a)(n,t);var e=Object(x.a)(n);function n(t){var a;return Object(m.a)(this,n),(a=e.call(this,t)).changeTitle=function(){a.setState({toggle:!a.state.toggle})},a.handleRename=function(t,e){a.changeTitle(),a.props.editTaskName(t,e)},a.state={toggle:!0},a}return Object(O.a)(n,[{key:"render",value:function(){var t=this.props,e=t.taskId,n=t.task,a=t.checked,i=t.deleteTask,r=t.editTaskCheck;t.editTaskName;return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(U,{children:[Object(y.jsx)(K,{taskId:e,checked:a,editTaskCheck:r}),Object(y.jsx)(V,{children:this.state.toggle?Object(y.jsx)("div",{onClick:this.changeTitle,children:n}):Object(y.jsx)(M,{id:e,status:"rename",placeholder:n,onSubmit:this.handleRename})}),Object(y.jsx)(H,{taskId:e,deleteTask:i})]})})}}]),n}(b.Component),Y=T.a.div(P||(P=Object(L.a)(["\n    width: 70%\n"]))),Z=function(t){var e=t.taskList,n=t.editTaskCheck,a=t.editTaskName,i=t.deleteTask;return console.log(e),Object(y.jsx)(Y,{children:e.map((function(t){return Object(y.jsx)(W,{taskId:t.id,task:t.name,checked:t.checked,editTaskCheck:n,editTaskName:a,deleteTask:i},t.id)}))})},$=T.a.div(Q||(Q=Object(L.a)(["\n    margin-left: 25%;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: calc(10px + 2vmin);\n    color:var(--text);\n    "]))),tt=function(t){Object(g.a)(n,t);var e=Object(x.a)(n);function n(t){var a;return Object(m.a)(this,n),(a=e.call(this,t)).startAddingTask=function(){a.setState({showAddingTask:!0})},a.addTask=function(t){var e=a.state.taskList.find((function(t){return t.id===a.props.id}));"undefined"===typeof e&&(e={id:a.props.id,tasks:[]}),e.tasks=[].concat(Object(f.a)(e.tasks),[t]);var n=a.state.taskList.map((function(t){return t.id===a.props.id?e:t}));n.find((function(t){return t.id===a.props.id}))||(n=[].concat(Object(f.a)(n),[e])),a.setState({taskList:n,showAddingTask:!1})},a.deleteTask=function(t){var e=a.state.taskList.find((function(t){return t.id===a.props.id}));e.tasks=e.tasks.filter((function(e){return e.id!==t}));var n=a.state.taskList.map((function(t){return t.id===a.props.id?e:t}));a.setState({taskList:n})},a.editTaskName=function(t,e){var n=a.state.taskList.find((function(t){return t.id===a.props.id}));n.tasks=n.tasks.map((function(n){return n.id===t?Object(q.a)(Object(q.a)({},n),{},{name:e}):n}));var i=a.state.taskList.map((function(t){return t.id===a.props.id?n:t}));a.setState({taskList:i})},a.editTaskCheck=function(t,e){var n=a.state.taskList.find((function(t){return t.id===a.props.id}));n.tasks=n.tasks.map((function(n){return n.id===t?Object(q.a)(Object(q.a)({},n),{},{checked:e}):n}));var i=a.state.taskList.map((function(t){return t.id===a.props.id?n:t}));a.setState({taskList:i})},a.state={taskList:[],showAddingTask:!1},a}return Object(O.a)(n,[{key:"render",value:function(){var t=this.props,e=t.id,n=t.title,a=this.state.taskList.find((function(t){return t.id===e}));return a&&console.log(a),this.props.title?Object(y.jsxs)($,{children:[Object(y.jsx)("h1",{className:"header",children:n}),"undefined"!==typeof a&&Object(y.jsx)(Z,{taskList:a.tasks,deleteTask:this.deleteTask,editTaskName:this.editTaskName,editTaskCheck:this.editTaskCheck}),!this.state.showAddingTask&&Object(y.jsx)(A,{startAddingTask:this.startAddingTask,children:"Add new task"}),this.state.showAddingTask&&Object(y.jsx)(M,{status:"new list",placeholder:"Enter new task",onSubmit:this.addTask})]}):Object(y.jsx)($,{children:Object(y.jsx)("h1",{className:"header",children:"To Do List"})})}}]),n}(j.a.Component),et=(n(30),function(t){Object(g.a)(n,t);var e=Object(x.a)(n);function n(){var t;return Object(m.a)(this,n),(t=e.call(this)).startAddingList=function(){t.setState({showNewListButton:!0})},t.state={masterLists:[],currentListId:"",currentListTitle:"",showNewListButton:!1},t.addNewList=t.addNewList.bind(Object(v.a)(t)),t.editCurrentList=t.editCurrentList.bind(Object(v.a)(t)),t}return Object(O.a)(n,[{key:"addNewList",value:function(t){this.setState({masterLists:[].concat(Object(f.a)(this.state.masterLists),[t]),showNewListButton:!1})}},{key:"editCurrentList",value:function(t){this.setState({currentListId:t});var e=this.state.masterLists.filter((function(e){return e.id===t}));if(e){var n=e.map((function(t){return t.name}));this.setState({currentListTitle:n})}}},{key:"render",value:function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(_,{lists:this.state.masterLists,addNewList:this.addNewList,editCurrentList:this.editCurrentList,newList:this.state.showNewListButton,startAddingList:this.startAddingList}),Object(y.jsx)(tt,{id:this.state.currentListId,title:this.state.currentListTitle})]})}}]),n}(b.Component));p.a.render(Object(y.jsx)(j.a.StrictMode,{children:Object(y.jsx)(et,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.fb3737ae.chunk.js.map