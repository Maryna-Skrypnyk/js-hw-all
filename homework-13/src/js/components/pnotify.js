import { error, success, notice } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

const errorNotify = text => {
  error({
    title: 'Error!',
    text,
    delay: 3000,
    addClass: 'notice',
  });
};

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
    delay: 4000,
    icon: false,
    addClass: 'notice',
  });
};

export { errorNotify, successNotify, noticeNotify };
