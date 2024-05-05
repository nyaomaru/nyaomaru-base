import React, { useState } from 'react';

import { CommentArea } from '@/components/atoms/CommentArea';
import { ImageWithAlt } from '@/components/atoms/ImageWithAlt';
import { RoundTag } from '@/components/atoms/RoundTag';
import { ReviewInfo } from '@/components/organisms/top/SectionReview';

type ModalProps = ReviewInfo;

export const ReviewModal: React.FC<ModalProps> = ({
  title,
  message,
  main,
  sub,
  clientImage,
  tag,
  modalImageLogo,
  modalImageLogoText,
  modalImageSecond,
  modalImageSecondText,
}: ModalProps) => {
  const [show, setShow] = useState(false);

  const handleModalOpen = () => {
    setShow(true);
  };

  const handleModalClose = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget.className === 'modal-card') {
      return;
    }
    setShow(false);
  };

  return (
    <>
      <div
        className="modal-button inline-block w-[275px] cursor-pointer rounded-md bg-gradient-to-r from-[#60C1C9] to-[#2A62C7] p-3 px-4 text-center text-white"
        onClick={handleModalOpen}
      >
        Detail
      </div>
      <div hidden={!show}>
        <div className="modal-background" onClick={handleModalClose} data-testid="modal-background">
          <div
            className="modal-card relative z-[999] mb-8 h-[60vh] w-[328px] overflow-y-auto rounded-lg bg-primary-light p-4 text-center"
            data-testid="modal-card"
          >
            <div className="card-inner mb-4 ml-auto rounded-xl bg-white px-4">
              <div className="tag-container mb-[24px]">
                <RoundTag tagName={tag} />
              </div>
              <div className="logo-container mb-[22px] flex justify-between">
                <div className="main border-r-DEFAULT border-primary-medium pr-4">
                  <ImageWithAlt src={main} width={120} height={70} alt="site-image" />
                </div>
                <div className="sub">
                  <ImageWithAlt src={sub} width={120} height={70} alt="site-image" />
                </div>
              </div>
              <div className="filter-shadow client-image-container mx-auto mb-4 size-[116px]">
                <ImageWithAlt src={clientImage} width={120} height={70} alt="site-image" />
              </div>
              <div className=" text-container">
                <div className="mb-3 inline-block">
                  <CommentArea comment={title} />
                </div>
                <div className="mb-4">
                  <CommentArea comment={message} />
                </div>
                <ImageWithAlt src={modalImageLogo} width={120} height={70} alt={title + 'の画像'} />
                <p className="mt-3 text-left text-primary-medium">{modalImageLogoText}</p>
                <ImageWithAlt
                  src={modalImageSecond}
                  width={120}
                  height={70}
                  alt={title + 'の画像'}
                />
                <p className="mt-3 text-left text-primary-medium">{modalImageSecondText}</p>
              </div>
            </div>
            <button className="modalClose" onClick={handleModalClose} />
          </div>
        </div>
      </div>
    </>
  );
};
