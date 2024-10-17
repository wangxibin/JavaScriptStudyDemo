(function () {
  class MyLog {
    constructor() {
      log("MyLog=>constructor()=>执行了...");
      log(this);
    }

    static log = (...c) => {
      console.log(c);
    };

    static warn = (...c) => {
      console.log(c);
    };

    static info = (...c) => {
      console.info(c);
    };

    static dir = (...c) => {
      console.dir(c);
    };

    static err = (...c) => {
      console.erroror(c);
    };
  }

  const promise = new Promise((resolve, reject) => {
    // 这里率先打印
    // Promise创建实例时，构造方法会主动执行这个方法
    console.log(resolve);
    console.log(reject);
    // 在resolve方法中主动处理异常，则不会导致Promise变成rejected状态
    try {
      throw new Error("在Promise中主动throw new Error");
    } catch (e) {
      console.log("通过try catch捕捉到主动抛出的异常");
    }
    // throw new Error('在Promise中主动throw new Error');
    resolve("promise resolve");
    // reject("promise reject");
    const mP = 0;
    console.log(mP);
  });
  const t = promise
    .then(
      (res) => {
        console.log("then()=>onfulfilled()=>111", res);
        // 主动抛出一个异常
        // throw new Error('then()=>onfulfilled()=>111');

        // 使用Promise.resolve()返回一个Promise对象
        return Promise.resolve("then()=>onfulfilled()=>111=>使用Promise.resolve()返回一个Promise对象");

        // 使用new Promise()返回一个Promise对象
        // return new Promise((resolve, reject) => {
        //   console.log('内部', resolve);
        //   console.log('内部',reject);
        //   resolve("then()=>onfulfilled()=>111=>使用new Promise()返回一个Promise对象");
        // });
        
        // 直接返回一个数据（这个数据会被Promise自动包装处理）
        // return 'then()=>onfulfilled()=>111=>直接返回一个数据'
      },
      (err) => {
        console.error("then()=>onrejected()=>111", err);

        // 主动抛出一个异常
        throw new Error('then()=>onrejected()=>111');

         // 使用Promise.resolve()返回一个Promise对象
        // return Promise.resolve("then()=>onrejected()=>111=>使用Promise.resolve()返回一个Promise对象");

        // 使用new Promise()返回一个Promise对象
        // return new Promise((resolve, reject) => {
        //   console.log('内部', resolve);
        //   console.log('内部',reject);
        //   resolve("then()=>onrejected()=>111=>使用new Promise()返回一个Promise对象");
        // });
        
        // 直接返回一个数据（这个数据会被Promise自动包装处理）
        // return 'then()=>onrejected()=>111=>直接返回一个数据'

      }
    )
    // .then(
    //   (res) => {
    //     console.log("then()=>onfulfilled()=>222", res);
    //   },
    //   // (err) => {
    //   //   console.error("then()=>onrejected()=>222", err);
    //   // }
    // )
    // .then(
    //   (res) => {
    //     console.log("then()=>onfulfilled()=>333", res);
    //   },
    //   (err) => { // onrejected()回调方法与下面的catch方法作用一样，但是优先级高
    //     console.error("then()=>onrejected()=>333", err);
    //   }
    // )
    .catch((err) => { // 这个是平时使用的处理rejected状态的方法，与then方法中的onrejected回调方法一个作用
      console.error("catch()=>444", err);
      // return err;
    })
    .then(
      (res) => {
        console.log("then()=>onfulfilled()=>222", res);
      },
      // (err) => {
      //   console.error("then()=>onrejected()=>222", err);
      // }
    )
    .then(
      (res) => {
        console.log("then()=>onfulfilled()=>333", res);
      },
      (err) => { // onrejected()回调方法与下面的catch方法作用一样，但是优先级高
        console.error("then()=>onrejected()=>333", err);
      }
    )
    .catch((err) => {
      console.error("catch()=>555", err);
    })
    .catch((err) => {
      console.error("catch()=>666", err);
    })
    .finally(() => {
      console.log("finally()=>777");
    })
    .finally(() => {
      console.log("finally()=>888");
    })
    .finally(() => {
      console.log("finally()=>999");
    });
  console.log(promise);
  console.log(t);
  console.log(promise === t);
})();
