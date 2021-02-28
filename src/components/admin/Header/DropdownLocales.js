import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  StyledDropdownLocales,
  ContainerDropdownLocales,
  DropdownLocalesItem,
} from './StyledHeader';
import Button from '../common/Button';
import { ReactComponent as EnglishIcon } from '../../../assets/images/english.svg';
import { ReactComponent as VietnamIcon } from '../../../assets/images/vietnam.svg';
import { ReactComponent as KoreaIcon } from '../../../assets/images/korea.svg';
import useOnClickOutside from '../../common/useOnClickOutside';

function DropdownLocales() {
  const options = [
    {
      value: 'en',
      label: 'English',
      Icon: <EnglishIcon />,
    },
    {
      value: 'vn',
      label: 'VietNam',
      Icon: <VietnamIcon />,
    },
    {
      value: 'kr',
      label: 'Korea',
      Icon: <KoreaIcon />,
    },
  ];
  const { t, i18n } = useTranslation();

  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsOpen(false));
  const handleChangeLang = (index) => {
    setIsOpen(!isOpen);
    setSelected(options[index]);
    i18n.changeLanguage(options[index].value || 'en');
  };

  return (
    <StyledDropdownLocales ref={ref} aria-expanded={isOpen}>
      <Button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        aria-haspopup="true"
        aria-expanded="false"
      >
        {selected.Icon}
      </Button>
      {isOpen && (
        <ContainerDropdownLocales>
          {options.map((e, index) => (
            <DropdownLocalesItem key={index} role="option">
              <Button onClick={() => handleChangeLang(index)}>
                {e.Icon}
                {e.label}
              </Button>
            </DropdownLocalesItem>
          ))}
        </ContainerDropdownLocales>
      )}
    </StyledDropdownLocales>
  );
}

export default DropdownLocales;
