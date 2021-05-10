import { createBrowserHistory } from 'history';

window.his = createBrowserHistory();

console.log(window.his);

window.his.listen((location, action) => {
    console.log('地址变化了');
});


window.unblock = window.his.block(({ action, location, retry }) => {
    console.log(action, location, retry);
    if(window.confirm('是否真的要进入')){
        window.unblock();
        retry();
    }
    // A transition was blocked!
  });
  
  // Later, when you want to start allowing transitions again...
//   unblock();

// window.h.push('/newsdsadf')
