import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10,          // 10 виртуальных пользователей
  duration: '30s',  // тест длится 30 секунд
};

export default function () {
  http.get('http://app:8080');
  sleep(0.1); // небольшая пауза между запросами
}
