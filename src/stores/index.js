/**
 * stores状态模块化
 */
import { createPinia } from 'pinia';
import useCommonStore from './storeCommon.js';
import useUserStore from './storeUser.js';

// 创建全局状态
export const pinia = createPinia();

// 全局状态日志查看
pinia.use(({ store }) => {
  store.$subscribe((e) => {
    // 在存储变化的时候执行
    console.debug(
      `%c${new Date().toLocaleString()}：${e.storeId} 中的 ${e.events.key}状态改变：`,
      'background-color: #00BCD4; padding: 6px 12px; border-radius: 2px; font-size: 14px; color: #fff; font-weight: 600;',
    );
    console.debug(`   `, e);
  });
  store.$onAction((e) => {
    // 在 action 的时候执行
    console.debug(
      `%c${new Date().toLocaleString()}：${e.name} 方法调用：`,
      'background-color: #2196f3; padding: 6px 12px; border-radius: 2px; font-size: 14px; color: #fff; font-weight: 600;',
    );
    console.debug(`   `, e);
  });
});

export { useUserStore, useCommonStore };
export default pinia;
