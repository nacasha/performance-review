export type IAssignment = {
  id: number;
  reviewerId: number;
  revieweeId: number;
};

export type IEmployee = {
  id: number;
  fullName: string;
  email: string;
  gender: 1 | 0;
  department: string;
  phoneNumber: string;
  address: string;
  isAdmin: boolean;
  createdAt: string;
};

export type IQuestion = {
  id: number;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type IReview = {
  id: number;
  assignmentId: number;
  questionId: number;
  text: string;
  createdAt: string;
  updatedAt: string;
};
