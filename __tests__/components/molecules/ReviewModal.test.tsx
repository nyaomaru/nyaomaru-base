import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import { ReviewModal } from '@/components/molecules/ReviewModal';

const reviewModal = () => {
  return (
    <ReviewModal
      title="Test Title"
      message="Test Message"
      main="/path/to/main.jpg"
      sub="/path/to/sub.jpg"
      clientImage="/path/to/client.jpg"
      tag="Test Tag"
      modalImageLogo="/path/to/modalImageLogo.jpg"
      modalImageLogoText="Test Logo Text"
      modalImageSecond="/path/to/modalImageSecond.jpg"
      modalImageSecondText="Test Second Image Text"
    />
  );
};

const testSetting = {
  detail: 'Detail',
  modalBackground: 'modal-background',
  modalCard: 'modal-card',
} as const;

describe('ReviewModal', () => {
  it('should open the modal when the "Detail" button is clicked', () => {
    const { getByText, getByTestId } = render(reviewModal());

    fireEvent.click(getByText(testSetting.detail));

    expect(getByTestId(testSetting.modalBackground)).toBeVisible();
  });

  it('should close the modal when clicking on the modal card', () => {
    const { getByText, getByTestId } = render(reviewModal());

    fireEvent.click(getByText(testSetting.detail));

    fireEvent.click(getByTestId(testSetting.modalCard));

    expect(getByTestId(testSetting.modalBackground)).not.toBeVisible();
  });
});
