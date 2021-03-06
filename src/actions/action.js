/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * 其它的常量
 */

// 枚举类型 给容器组件做验收用...
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};


export function addTodo(text) {
    return {type: 'ADD_TODO', text}
}

export function toggleTodo(index) {
    return {type: 'TOGGLE_TODO', index}
}

export function setVisibilityFilter(filter) {
    return {type: 'SET_VISIBILITY_FILTER', filter}
}