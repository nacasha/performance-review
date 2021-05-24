export const AUTH_INDEX_PAGE = '/auth';
export const AUTH_LOGIN_PAGE = '/auth/login';

export const DASHBOARD_INDEX_PAGE = '/';

export const ASSIGNMENTS_INDEX_PAGE = '/assignments';
export const ASSIGNMENTS_ADD_PAGE = '/assignments/add';
export const ASSIGNMENTS_EDIT_PAGE = (id: string | number) => `/assignments/edit/${id}`;

export const EMPLOYEES_INDEX_PAGE = '/employees';
export const EMPLOYEES_ADD_PAGE = '/employees/add';
export const EMPLOYEES_EDIT_PAGE = (id: string | number) => `/employees/edit/${id}`;

export const REVIEWS_INDEX_PAGE = '/reviews';
export const REVIEWS_ADD_PAGE = '/reviews/add';
export const REVIEWS_EDIT_PAGE = (id: string | number) => `/reviews/edit/${id}`;

export const QUESTIONS_INDEX_PAGE = '/questions';
export const QUESTIONS_ADD_PAGE = '/questions/add';
export const QUESTIONS_EDIT_PAGE = (id: string | number) => `/questions/edit/${id}`;
