export var notificationsIntro;

export async function notificationsIntroSettings() {
    
  notificationsIntro = document.querySelector('#intro_notifications_setting input').checked;
  localStorage.setItem('notificationsIntro', notificationsIntro);

}