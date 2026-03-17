import contentTypes from '@/structure/contentTypes';
import { getContentTypes } from '@/structure/getContentTypes';
import renderContentType from '@/structure/renderContentType';

import type { StructureResolver } from 'sanity/structure';

const structure: StructureResolver = (S) => {
  const types = getContentTypes(contentTypes, '1');
  console.log(types);

  return S.list()
    .title('Sanity')
    .items(
      types.map((contentType) => renderContentType(S, contentType)).filter((item) => item !== null),
    );
};

export default structure;
