import contentTypes from '@/structure/contentTypes';
import { getAllContentTypes } from '@/workspace/getAllContentTypes';

// Include both top-level and nested (children) schema types
export const allContentTypes = getAllContentTypes(contentTypes);
