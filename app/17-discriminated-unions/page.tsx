'use client';

// First Example:
type ModalProps = { type: 'alert' } | { type: 'confirm'; confirmButtonText: string };

const Modal = ({ type }: ModalProps) => {
  let message = '';
  if (type === 'alert') {
    message = 'Alert Action required!';
  } else if (type === 'confirm') {
    message = 'Confirm Action';
  }

  return (
    <dialog open>
      <p>{message}</p>
      <form method='dialog'>
        <button>OK</button>
      </form>
    </dialog>
  );
};

// Second Example:
type ApiResponse<T> =
  | { status: 'success'; data: T; timestamp: Date }
  | { status: 'error'; message: string; timestamp: Date };

export default function ParentComponent() {
  let successResponse: ApiResponse<number> = {
    status: 'error',
    message: 'Something went wrong',
    timestamp: new Date(),
  };

  let errorResponse: ApiResponse<number> = {
    status: 'success',
    data: 200,
    timestamp: new Date(),
  };
  return (
    <Modal
      type='confirm'
      confirmButtonText='Confirm'></Modal>
  );
}
