import { XMLParser } from 'fast-xml-parser';

export const parseXml = async (xml: string, options = {}): Promise<any> => {
  try {
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '',
      ...options
    });
    
    return parser.parse(xml);
  } catch (error) {
    throw new Error(`XML parsing failed: ${error}`);
  }
};