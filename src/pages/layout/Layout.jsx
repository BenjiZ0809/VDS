import {
  Utility,
  Link,
  Switch,
  SwitchLabel,
  DropdownButton,
  DropdownMenu,
  UtilityFragment,
  Listbox,
  Button,
  DropdownContainer,
  Typography,
} from "@visa/nova-react";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { switchTheme } from "../../utils/SetTheme";
import {
  useFloating,
  useInteractions,
  useClick,
  useDismiss,
} from "@floating-ui/react";
import { VisaChevronUpTiny, VisaChevronDownTiny } from "@visa/nova-icons-react";
import { useSavedQueries } from "../../context/SavedQueriesContext.jsx";
import { VisaDeleteTiny } from "@visa/nova-icons-react";

function Layout() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { savedQueries, setSavedQueries } = useSavedQueries();
  const { context, floatingStyles, refs } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: "bottom-start",
  });
  const onClick = useClick(context);
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    onClick,
    dismiss,
  ]);

  const handleSwitchTheme = (e) => {
    const newTheme = e.target.checked ? "visa-light" : "visa-dark";
    switchTheme(newTheme);
  };

  const onClickSaved = (index) => {
    const curQuery = savedQueries[index];
    console.log("onClickSaved", index);
    console.log(savedQueries[index]);

    navigate(`/result`, {
      state: {
        mode: "saved",
        query: curQuery.query,
        keyWord: curQuery.keyWord,
        componentSet: new Set(curQuery.components),
      },
    });
  };

  const onClickDelete = (index) => {
    const updated = savedQueries.filter((_, i) => i !== index);
    setSavedQueries(updated);
  };

  return (
    <>
      <Utility
        vFlex
        vFlexRow
        vJustifyContent="end"
        vAlignItems="center"
        vMarginTop={4}
        vPaddingHorizontal={32}
        style={{ height: "48px" }}
      >
        <DropdownButton
          colorScheme="secondary"
          aria-controls="savedQueries"
          aria-expanded={open}
          id="savedQueries"
          ref={refs.setReference}
          {...getReferenceProps()}
        >
          Saved Queries
          {open ? <VisaChevronUpTiny /> : <VisaChevronDownTiny />}
        </DropdownButton>
        {open && (
          <DropdownMenu
            id="savedQueries"
            aria-hidden={!open}
            ref={refs.setFloating}
            style={{ inlineSize: "300px", ...floatingStyles, zIndex: 999 }}
            {...getFloatingProps()}
          >
            <UtilityFragment
              vHide={!open}
              style={{
                zIndex: 10,
                backgroundColor: "var(--palette-default-surface-1)",
              }}
            >
              {savedQueries.length === 0 ? (
                <Utility vPadding={16} vFlex vFlexRow vAlignItems="center">
                  <Typography>Nothing saved for now</Typography>
                </Utility>
              ) : (
                <Listbox>
                  {savedQueries.map((item, index) => (
                    <li key={index}>
                      <UtilityFragment
                        vFlex
                        vFlexRow
                        vAlignItems="start"
                        vGap={6}
                        vPaddingHorizontal={8}
                        vPaddingVertical={11}
                      >
                        <Utility
                          vFlex
                          vFlexRow
                          vAlignItems="center"
                          vJustifyContent="between"
                        >
                          <Button
                            className="v-listbox-item"
                            colorScheme="tertiary"
                            subtle
                            onClick={() => onClickSaved(index)}
                          >
                            {
                              // @ts-ignore
                              item.query.length > 25
                                ? item.query.slice(0, 27) + "..."
                                : item.query
                            }
                          </Button>
                          <Button
                            aria-label="delete saved query"
                            buttonSize="small"
                            iconButton
                            destructive
                            onClick={() => onClickDelete(index)}
                          >
                            <VisaDeleteTiny />
                          </Button>
                        </Utility>
                      </UtilityFragment>
                    </li>
                  ))}
                </Listbox>
              )}
            </UtilityFragment>
          </DropdownMenu>
        )}

        <Utility vFlex vFlexRow vAlignItems="center" vGap={8} vMarginLeft={16}>
          <SwitchLabel htmlFor="theme">Switch Theme</SwitchLabel>
          <Switch onChange={(e) => handleSwitchTheme(e)}></Switch>
        </Utility>
      </Utility>
      <Outlet />
    </>
  );
}

export default Layout;
