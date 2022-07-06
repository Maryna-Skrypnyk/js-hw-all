import { success, notice, error, info } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

const successNotify = text => {
  success({
    title: 'Successful request!',
    text,
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

export { successNotify, noticeNotify, infoNotify, errorNotify };
