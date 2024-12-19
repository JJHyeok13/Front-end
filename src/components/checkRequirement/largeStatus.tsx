import React from 'react';
import { CheckGraduationItem } from 'type/types';

import DownArrow from '@assets/checkRequirement/downArrow.svg';

interface LargeStatusProps {
  title: string;
  value: CheckGraduationItem;
}

const LargeStatus: React.FC<LargeStatusProps> = ({ title, value }) => {
  const percentage = (value.totalCompletedCredit / value.totalNeedCredit) * 100;

  return (
    <div className="rounded-five border border-black bg-white p-4">
      <div className="mb-4 flex flex-row items-center space-x-2">
        <img src={DownArrow} className="cursor-pointer" />
        <p className="font-semibold">{title}</p>
      </div>

      <div className="relative mx-6 mb-6 h-[30px] w-[880px] rounded-[20px] border border-black">
        <div
          className={`absolute left-0 top-0 h-full bg-large-gradient ${
            percentage === 100 ? 'rounded-[20px]' : 'rounded-l-[20px]'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <ol className="mx-10 space-y-2">
        <li className="flex flex-row">
          <p className="w-20">전체</p>
          <p className="min-w-[98px] text-right font-normal">
            <span
              className={`${
                value.totalCompletedCredit < value.totalNeedCredit && 'text-[#D32F2F]'
              }`}
            >
              {value.totalCompletedCredit}
            </span>
            <span> / {value.totalNeedCredit} 학점</span>
          </p>
        </li>

        <li className="flex flex-row">
          <p className="w-20">전공전체</p>
          <p className="min-w-[98px] text-right font-normal">
            <span
            // className={`${
            //   value.majorRequiredDTO.completedCredit + value.majorSelectDTO.completedCredit <
            //     value.majorRequiredDTO.requiredCredit + value.majorSelectDTO.requiredCredit &&
            //   'text-[#D32F2F]'
            // }`}
            >
              {/* {value.majorRequiredDTO.completedCredit + value.majorSelectDTO.completedCredit} */}
            </span>
            <span>
              {/* / {value.majorRequiredDTO.requiredCredit + value.majorSelectDTO.requiredCredit} 학점 */}
            </span>
          </p>
        </li>

        <li className="flex flex-row">
          <p className="w-20">전공필수</p>
          <p className="min-w-[98px] text-right font-normal">
            <span
            // className={`${
            //   value.majorRequiredDTO.completedCredit + value.majorSelectDTO.completedCredit <
            //     value.majorRequiredDTO.requiredCredit + value.majorSelectDTO.requiredCredit &&
            //   'text-[#D32F2F]'
            // }`}
            >
              {/* {value.majorRequiredDTO.completedCredit + value.majorSelectDTO.completedCredit} */}
            </span>
            <span>
              {/* / {value.majorRequiredDTO.requiredCredit + value.majorSelectDTO.requiredCredit} 학점 */}
            </span>
          </p>
        </li>

        <li className="flex flex-row">
          <p className="w-20">교양필수</p>
          <p className="min-w-[98px] text-right font-normal">
            <span
            // className={`${
            //   value.majorRequiredDTO.completedCredit + value.majorSelectDTO.completedCredit <
            //     value.majorRequiredDTO.requiredCredit + value.majorSelectDTO.requiredCredit &&
            //   'text-[#D32F2F]'
            // }`}
            >
              {/* {value.majorRequiredDTO.completedCredit + value.majorSelectDTO.completedCredit} */}
            </span>
            <span>
              {/* / {value.majorRequiredDTO.requiredCredit + value.majorSelectDTO.requiredCredit} 학점 */}
            </span>
          </p>
        </li>

        <li className="flex flex-row">
          <p className="w-20">핵심교양</p>
          <p className="min-w-[98px] text-right font-normal">
            <span
            // className={`${
            //   value.majorRequiredDTO.completedCredit + value.majorSelectDTO.completedCredit <
            //     value.majorRequiredDTO.requiredCredit + value.majorSelectDTO.requiredCredit &&
            //   'text-[#D32F2F]'
            // }`}
            >
              {/* {value.majorRequiredDTO.completedCredit + value.majorSelectDTO.completedCredit} */}
            </span>
            <span>
              {/* / {value.majorRequiredDTO.requiredCredit + value.majorSelectDTO.requiredCredit} 학점 */}
            </span>
          </p>
        </li>

        <li className="flex flex-row">
          <p className="w-20">SW/AI</p>
          <p className="min-w-[98px] text-right font-normal">
            <span
            // className={`${
            //   value.majorRequiredDTO.completedCredit + value.majorSelectDTO.completedCredit <
            //     value.majorRequiredDTO.requiredCredit + value.majorSelectDTO.requiredCredit &&
            //   'text-[#D32F2F]'
            // }`}
            >
              {/* {value.majorRequiredDTO.completedCredit + value.majorSelectDTO.completedCredit} */}
            </span>
            <span>
              {/* / {value.majorRequiredDTO.requiredCredit + value.majorSelectDTO.requiredCredit} 학점 */}
            </span>
          </p>
        </li>

        <li className="flex flex-row">
          <p className="w-20">창의</p>
          <p className="min-w-[98px] text-right font-normal">
            <span
            // className={`${
            //   value.majorRequiredDTO.completedCredit + value.majorSelectDTO.completedCredit <
            //     value.majorRequiredDTO.requiredCredit + value.majorSelectDTO.requiredCredit &&
            //   'text-[#D32F2F]'
            // }`}
            >
              {value.creativityDTO.completedCredit}
            </span>
            <span>/ {value.creativityDTO.requiredCredit} 학점</span>
          </p>
        </li>
      </ol>
    </div>
  );
};

export default LargeStatus;