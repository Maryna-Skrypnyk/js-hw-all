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
