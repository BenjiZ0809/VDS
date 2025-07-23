import React from "react";
import {
  TableWrapper,
  Table,
  ScreenReader,
  Thead,
  Tr,
  Tbody,
  Th,
  Td,
} from "@visa/nova-react";

export default function Chart() {
  return (
    <>
      <TableWrapper
        style={{
          // @ts-ignore
          "--v-table-wrapper-block-size": "288px",
          "--v-table-wrapper-inline-size": "576px",
        }}
        tabIndex={0}
      >
        <Table alternate>
          <ScreenReader tag="caption">
            Table with extra data added to demo scrollable content.
          </ScreenReader>
          <Thead>
            <Tr>
              <Th scope="col">Column A</Th>
              <Th scope="col">Column B</Th>
              <Th scope="col">Column C</Th>
              <Th scope="col">Column D</Th>
              <Th scope="col">Column E</Th>
              <Th scope="col">Column F</Th>
              <Th scope="col">Column G</Th>
              <Th scope="col">Column H</Th>
              <Th scope="col">Column I</Th>
              <Th scope="col">Column J</Th>
              <Th scope="col">Column K</Th>
              <Th scope="col">Column L</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>A1</Td>
              <Td>B1</Td>
              <Td>C1</Td>
              <Td>D1</Td>
              <Td>E1</Td>
              <Td>F1</Td>
              <Td>G1</Td>
              <Td>H1</Td>
              <Td>I1</Td>
              <Td>J1</Td>
              <Td>K1</Td>
              <Td>L1</Td>
            </Tr>
            <Tr>
              <Td>A2</Td>
              <Td>B2</Td>
              <Td>C2</Td>
              <Td>D2</Td>
              <Td>E2</Td>
              <Td>F2</Td>
              <Td>G2</Td>
              <Td>H2</Td>
              <Td>I2</Td>
              <Td>J2</Td>
              <Td>K2</Td>
              <Td>L2</Td>
            </Tr>
            <Tr>
              <Td>A3</Td>
              <Td>B3</Td>
              <Td>C3</Td>
              <Td>D3</Td>
              <Td>E3</Td>
              <Td>F3</Td>
              <Td>G3</Td>
              <Td>H3</Td>
              <Td>I3</Td>
              <Td>J3</Td>
              <Td>K3</Td>
              <Td>L3</Td>
            </Tr>
            <Tr>
              <Td>A4</Td>
              <Td>B4</Td>
              <Td>C4</Td>
              <Td>D4</Td>
              <Td>E4</Td>
              <Td>F4</Td>
              <Td>G4</Td>
              <Td>H4</Td>
              <Td>I4</Td>
              <Td>J4</Td>
              <Td>K4</Td>
              <Td>L4</Td>
            </Tr>
            <Tr>
              <Td>A5</Td>
              <Td>B5</Td>
              <Td>C5</Td>
              <Td>D5</Td>
              <Td>E5</Td>
              <Td>F5</Td>
              <Td>G5</Td>
              <Td>H5</Td>
              <Td>I5</Td>
              <Td>J5</Td>
              <Td>K5</Td>
              <Td>L5</Td>
            </Tr>
            <Tr>
              <Td>A6</Td>
              <Td>B6</Td>
              <Td>C6</Td>
              <Td>D6</Td>
              <Td>E6</Td>
              <Td>F6</Td>
              <Td>G6</Td>
              <Td>H6</Td>
              <Td>I6</Td>
              <Td>J6</Td>
              <Td>K6</Td>
              <Td>L6</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableWrapper>
    </>
  );
}
