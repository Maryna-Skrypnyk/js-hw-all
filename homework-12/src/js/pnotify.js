// import {
//   alert,
//   defaultModules,
// } from '../../node_modules/@pnotify/core/dist/PNotify.js';
// import * as PNotifyMobile from '../../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';

// // import '@pnotify/core/dist/BrightTheme.css';
// import '@pnotify/core/dist/Material.css';
// import { defaults } from '@pnotify/core';
// defaults.styling = 'material';

// // defaultModules.set(PNotifyMobile, {});

// const successNotify = text => {
//   defaultModules.set(PNotifyMobile, {});
//   alert({
//     title: 'Success!',
//     text: text,
//   });
// };

// // const errorNotify = text => {
// //   defaultModules.set(PNotifyMobile, {});

// //   alert({
// //     text,
// //   });
// // };

// // const warningNotify = text => {
// //   defaultModules.set(PNotifyMobile, {});

// //   alert({
// //     text,
// //   });
// // };

// export default { successNotify };

import { success, notice, error, alert, info } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

const successNotify = text => {
  success({
    title: 'Successful request!',
    text,
    // styling: 'custom',
    // addModelessClass: 'nonblock',
    delay: 2000,
    addClass: 'notice',
  });
};

const noticeNotify = text => {
  notice({
    title: 'Notice!',
    text,
    delay: 3000,
    icon: false,
    addClass: 'notice',
  });
};

const infoNotify = text => {
  info({
    title: 'Info!',
    text,
    delay: 3000,
    // icon: false,
    addClass: 'notice',
  });
};

const errorNotify = text => {
  error({
    title: 'Error!',
    text,
    delay: 3000,
    addClass: 'notice',
  });
};

export default { successNotify, noticeNotify, infoNotify, errorNotify };
